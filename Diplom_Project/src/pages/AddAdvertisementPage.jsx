import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAdvertisement } from '../redux/actions/carActions';
import { OutlinedInput, FormControl, FormHelperText, InputLabel, Select, MenuItem, Button, Snackbar, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddAdvertisementPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    price: '',
    year: '',
    type: '',
    mileage: '',
    description: '',
    image: '',
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);  

 
  const validateFormData = () => {
    const validationErrors = {};
    const currentYear = new Date().getFullYear();

    if (!formData.brand) validationErrors.brand = 'Бренд обязателен';
    if (!formData.model) validationErrors.model = 'Модель обязательна';
    if (!formData.price || parseFloat(formData.price) <= 0) {
      validationErrors.price = 'Цена должна быть положительным числом';
    }
    if (!formData.year || formData.year.length !== 4 || parseInt(formData.year) > currentYear) {
      validationErrors.year = 'Год должен сосоять из 4 цифр и не позже текущего';
    }
    if (!formData.type) validationErrors.type = 'Тип обязателен';

    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'price' || name === 'mileage' || name === 'year') {
      if (!/^\d*$/.test(value)) return;
      if (value < 0) return; 
    }

    if (name === 'year') {
      const currentYear = new Date().getFullYear();
      if (value && (parseInt(value) > currentYear || value.length > 4)) {
        return; 
      }
    }

    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      setIsFormChanged(true);
      return updatedData;
    });

    if (value) {
      setErrors((prev) => ({ ...prev, [name]: false }));
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

    const newAdvertisement = { ...formData, userId: user.id };
    dispatch(addAdvertisement(newAdvertisement));

    setSuccessMessage('Объявление успешно добавлено!');
    setOpenSnackbar(true);
    setIsSuccess(true);  
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate('/my-advertisement'); 
      }, 1000);  

      return () => clearTimeout(timer); //при размонтировании компонента чистим timeout
    }
  }, [isSuccess, navigate]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Добавить объявление</h1>
      <form onSubmit={handleSubmit}>
        {/* Бренд */}
        <FormControl fullWidth variant="outlined" error={Boolean(errors.brand)} sx={{ mb: 2 }}>
          <InputLabel>Бренд</InputLabel>
          <Select
            name="brand"
            value={formData.brand}
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
            value={formData.model}
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
            value={formData.price}
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
            value={formData.year}
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
            value={formData.type}
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
          <InputLabel>Пробег (км)</InputLabel>
          <OutlinedInput
            name="mileage"
            type="number"
            value={formData.mileage}
            onChange={handleChange}
            label="Пробег (км)"
          />
        </FormControl>

        {/* Описание */}
        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>Описание</InputLabel>
          <OutlinedInput
            name="description"
            value={formData.description}
            onChange={handleChange}
            label="Описание"
            multiline
            rows={4}
          />
        </FormControl>

        {/* Изображение */}
        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>Изображение</InputLabel>
          <OutlinedInput
            name="image"
            value={formData.image}
            onChange={handleChange}
            label="Изображение"
          />
        </FormControl>

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Сохранить
        </Button>
      </form>

      {/* Snackbar для ошибок или успеха */}
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

export default AddAdvertisementPage;
