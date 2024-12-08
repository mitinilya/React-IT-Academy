import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, updateCar } from '../redux/actions/carActions';
import { OutlinedInput, FormControl, FormHelperText, InputLabel, Select, MenuItem, Button, Snackbar, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditAdvertisementPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const car = useSelector((state) =>
    state.cars.cars.find((car) => car.id === id)
  );
  
  const [localCarData, setLocalCarData] = useState(car || {});
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Для успешных уведомлений
  const [isFormChanged, setIsFormChanged] = useState(false);

  const validateFormData = () => {
    const validationErrors = {};
    const currentYear = new Date().getFullYear();

    // Валидация обязательных полей
    if (!localCarData.brand) validationErrors.brand = 'Бренд обязателен';
    if (!localCarData.model) validationErrors.model = 'Модель обязательна';
    
    // Валидация для цены
    if (!localCarData.price || parseFloat(localCarData.price) <= 0) {
      validationErrors.price = 'Цена должна быть положительным числом';
    }
    
    // Валидация для года
    if (!localCarData.year || localCarData.year.length !== 4 || parseInt(localCarData.year) > currentYear) {
      validationErrors.year = 'Год должен сосоять из 4 цифр и не позже текущего';
    }
    
    // Валидация для типа
    if (!localCarData.type) validationErrors.type = 'Тип обязателен';

    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Реальное время валидации для чисел
    if (name === 'price' || name === 'mileage' || name === 'year') {
      if (!/^\d*$/.test(value)) return; // Только цифры
      if (value < 0) return; // Запрещаем отрицательные значения
    }

    if (name === 'year') {
      const currentYear = new Date().getFullYear();
      if (value && (parseInt(value) > currentYear || value.length > 4)) {
        return; // Запрещаем некорректный год
      }
    }

    setLocalCarData((prev) => {
      const updatedData = { ...prev, [name]: value };
      setIsFormChanged(true);
      return updatedData;
    });

    if (value) {
      setErrors((prev) => ({ ...prev, [name]: false })); // Убираем ошибку, если поле заполнено корректно
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateFormData();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setErrorMessage('Пожалуйста, исправьте ошибки в форме');
      setOpenSnackbar(true);
      return;
    }

    dispatch(updateCar(id, localCarData)); // Обновление данных
    setSuccessMessage('Объявление успешно обновлено!'); // Уведомление об успехе
    setOpenSnackbar(true); // Открытие Snackbar с успехом
    setTimeout(() => {
      navigate('/my-advertisement'); // Перенаправление после успешного обновления
    }, 2000); // Задержка перед переходом
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setSuccessMessage(''); // Сброс успешного сообщения
    setErrorMessage(''); // Сброс сообщения об ошибке
  };

  useEffect(() => {
    if (!car) {
      dispatch(fetchCars()); // Загружаем все автомобили, если данные еще не загружены
    } else {
      setLocalCarData(car);
    }
  }, [car, dispatch]);

  if (!localCarData) return <p>Загрузка...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Редактировать объявление</h1>
      <form onSubmit={handleSubmit}>
        {/* Бренд */}
        <FormControl fullWidth variant="outlined" error={Boolean(errors.brand)} sx={{ mb: 2 }}>
          <InputLabel>Бренд</InputLabel>
          <Select
            name="brand"
            value={localCarData.brand || ''}
            onChange={handleChange}
            label="Бренд"
            required
          >
            <MenuItem value="">Выберите бренд</MenuItem>
            {['Audi', 'BMW', 'Renault', 'Peugeot', 'Mercedes-Benz', 'Volkswagen', 'Ferrari', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Mazda', 'Hyundai', 'Kia', 'Citroën', 'Subaru', 'Tesla', 'Lexus', 'Infiniti', 'Cadillac'].map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
          {errors.brand && <FormHelperText>{errors.brand}</FormHelperText>}
        </FormControl>

        {/* Модель */}
        <FormControl fullWidth variant="outlined" error={Boolean(errors.model)} sx={{ mb: 2 }}>
          <InputLabel>Модель</InputLabel>
          <OutlinedInput
            name="model"
            value={localCarData.model || ''}
            onChange={handleChange}
            label="Модель"
            required
          />
          {errors.model && <FormHelperText>{errors.model}</FormHelperText>}
        </FormControl>

        {/* Цена */}
        <FormControl fullWidth variant="outlined" error={Boolean(errors.price)} sx={{ mb: 2 }}>
          <InputLabel>Цена</InputLabel>
          <OutlinedInput
            name="price"
            type="number"
            value={localCarData.price || ''}
            onChange={handleChange}
            label="Цена"
            required
          />
          {errors.price && <FormHelperText>{errors.price}</FormHelperText>}
        </FormControl>

        {/* Год */}
        <FormControl fullWidth variant="outlined" error={Boolean(errors.year)} sx={{ mb: 2 }}>
          <InputLabel>Год</InputLabel>
          <OutlinedInput
            name="year"
            type="number"
            value={localCarData.year || ''}
            onChange={handleChange}
            label="Год"
            required
          />
          {errors.year && <FormHelperText>{errors.year}</FormHelperText>}
        </FormControl>

        {/* Тип */}
        <FormControl fullWidth variant="outlined" error={Boolean(errors.type)} sx={{ mb: 2 }}>
          <InputLabel>Тип</InputLabel>
          <Select
            name="type"
            value={localCarData.type || ''}
            onChange={handleChange}
            label="Тип"
            required
          >
            <MenuItem value="">Выберите тип</MenuItem>
            <MenuItem value="Бензин">Бензин</MenuItem>
            <MenuItem value="Дизель">Дизель</MenuItem>
            <MenuItem value="Электро">Электро</MenuItem>
          </Select>
          {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
        </FormControl>

        {/* Пробег */}
        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>Пробег</InputLabel>
          <OutlinedInput
            name="mileage"
            type="number"
            value={localCarData.mileage || ''}
            onChange={handleChange}
            label="Пробег"
          />
        </FormControl>

        {/* Описание */}
        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>Описание</InputLabel>
          <OutlinedInput
            name="description"
            value={localCarData.description || ''}
            onChange={handleChange}
            label="Описание"
            multiline
            rows={4}
          />
        </FormControl>

        {/* URL изображения */}
        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>URL изображения</InputLabel>
          <OutlinedInput
            name="image"
            value={localCarData.image || ''}
            onChange={handleChange}
            label="URL изображения"
          />
        </FormControl>

        {/* Кнопка Сохранить */}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Сохранить
        </Button>
      </form>

      {/* Snackbar для ошибок */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {successMessage ? (
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: '100%' }}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
              >
                <CloseIcon />
              </IconButton>
            }
          >
            {successMessage}
          </Alert>
        ) : (
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: '100%' }}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
              >
                <CloseIcon />
              </IconButton>
            }
          >
            {errorMessage}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default EditAdvertisementPage;
