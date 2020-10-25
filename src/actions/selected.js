import { createAsyncThunk } from '@reduxjs/toolkit';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { listGifs } from '../graphql/queries';

const fetchGifs = async () => {
    const data = await API.graphql(graphqlOperation(listGifs));
    console.log(data);
    return data.data.listSelections.items;
};
