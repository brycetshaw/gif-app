import { graphqlOperation } from '@aws-amplify/api-graphql';
import { listGifs } from '../graphql/queries';
import { API } from '@aws-amplify/api';

export const fetchGifs = async () => {
    const data = await API.graphql(graphqlOperation(listGifs));
    console.log(data);
    return data.data.listGifs.items;
};
