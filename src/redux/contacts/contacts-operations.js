import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63c3fd198067b6bef6d17030.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/FetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/contacts', contact);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
