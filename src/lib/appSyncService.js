import {API} from "@aws-amplify/api";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {listSelections} from "../graphql/queries";

export const getAPIState = async () => {
    const data = await API.graphql(graphqlOperation(listSelections))
    console.log(data)
    return data.data.listSelections.items;
}
