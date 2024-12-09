import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const openModal = createAsyncThunk('modal/open', async (_, thunkAPI) => {
  return true;
});

export const closeModal = createAsyncThunk(
  'modal/close',
  async (_, thunkAPI) => {
    //console.log("Now");
    return false;
  }
);

export const handleFilterFowardUp = createAsyncThunk(
  'filter/fowardUp',
  async (val, thunkAPI) => {
    return val + 4;
  }
);

export const handleFilterFowardDown = createAsyncThunk(
  'filter/fowardDown',
  async (val, thunkAPI) => {
    return val + 4;
  }
);


export const handleFilterBackwardUp = createAsyncThunk(
  'filter/backwardUp',
  async (val, thunkAPI) => {
    return val - 4;
  }
);

export const handleFilterBackwardDown = createAsyncThunk(
  'filter/backwardDown',
  async (val, thunkAPI) => {
    return val - 4;
  }
);

export const updateContactAvatar = createAsyncThunk(
  'contacts/updateContactAvatar',
  async ({myFile, myId}, thunkAPI) => {
    Notiflix.Loading.pulse('Updating Your Picture...', {
      svgColor: 'rgb(235, 144, 25)',
      fontFamily: 'DM Sans',
    });
    try {
      const res = await axios.patch(`/contacts/avatars/${myId}`, { avatar: myFile }, {headers: { 'Content-Type': 'multipart/form-data' }});

      Notiflix.Loading.remove();
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure('Incorrect Input Format');
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContactName = createAsyncThunk(
  'contacts/updateContactName',
  async ({ name, myUpdateId}, thunkAPI) => {
    Notiflix.Loading.pulse('Updating Your Name...', {
      svgColor: 'rgb(235, 144, 25)',
      fontFamily: 'DM Sans',
    });
    try {
      const res = await axios.patch(`/contacts/nameupdate/${myUpdateId}`, {
        name
      });

      const response = await axios.get('/contacts');


      Notiflix.Loading.remove();
      //return res.data;
      return {
        newObj: res.data,
        newRay: response.data
      };
    } catch (error) {
      Notiflix.Notify.failure(
        'Incorrect Input Format'
      );
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContactEmail = createAsyncThunk(
  'contacts/updateContactEmail',
  async ({ email, myUpdateId }, thunkAPI) => {
    Notiflix.Loading.pulse('Updating Your Email...', {
      svgColor: 'rgb(235, 144, 25)',
      fontFamily: 'DM Sans',
    });
    try {
      const res = await axios.patch(`/contacts/emailupdate/${myUpdateId}`, {
        email,
      });

      const response = await axios.get('/contacts');

      Notiflix.Loading.remove();
      //return res.data;
      return {
        newObj: res.data,
        newRay: response.data,
      };
    } catch (error) {
      Notiflix.Notify.failure('Incorrect Input Format');
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContactPhone = createAsyncThunk(
  'contacts/updateContactPhone',
  async ({ phone, myUpdateId }, thunkAPI) => {
    Notiflix.Loading.pulse('Updating Your Phone Number...', {
      svgColor: 'rgb(235, 144, 25)',
      fontFamily: 'DM Sans',
    });
    try {
      const res = await axios.patch(`/contacts/phoneupdate/${myUpdateId}`, {
        phone,
      });

      const response = await axios.get('/contacts');

      Notiflix.Loading.remove();
      //return res.data;
      return {
        newObj: res.data,
        newRay: response.data,
      };
    } catch (error) {
      Notiflix.Notify.failure('Incorrect Input Format');
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContactById = createAsyncThunk(
  'contacts/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts/${id}`);
      //console.log (response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        //console.log (response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts/`, { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${taskId}`);
      const res = await axios.get('/contacts');
      const state = thunkAPI.getState();
      const selectedContact = state.contacts.contacts.selectedContact;
      //const newContacts = res.data;
      //console.log(newContacts);
       //const exist = newContacts.find(contact => contact._id === taskId);
    
    if (selectedContact._id === taskId) {
      thunkAPI.dispatch(closeModal());
    }
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);          

                                          