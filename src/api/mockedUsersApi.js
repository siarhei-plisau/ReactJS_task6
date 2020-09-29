import {mockedResponseUser} from './mockedResponseUsers';

export const apiCallUsers = () => {
    return new Promise (( resolve ) => 
        setTimeout( () => resolve(mockedResponseUser), 1000 )
    );
}
