import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { addAPIStateAction } from '../reducers/rootReducer';

import { getAPIState } from '../lib/appSyncService';

const checkUser = () => {
    Auth.currentAuthenticatedUser()
        .then((user) => console.log(user))
        .catch((err) => console.log(err));
};
const AuthButton = () => {
    const dispatch = useDispatch();
    const addAPIState = (apiState) => dispatch(addAPIStateAction());

    useEffect(() => {
        Hub.listen('auth', (data) => {
            const { payload } = data;
            console.log('auth event happened!', data);

            if (payload.event === 'signIn') {
                console.log('sign in');

                getAPIState()
                    .then(addAPIState)
                    .catch((err) => console.log(err));
            }

            if (payload.event === 'signOut') {
                console.log('signed out');
            }
        });
    });
    return (
        <Button onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}>
            Login with Facebook
        </Button>
    );
};
export { AuthButton };
