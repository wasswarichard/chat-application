import React from 'react';
import CreateUser from "./CreateUser";
import renderer from 'react-test-renderer';

test('component should renders properly', () => {
    renderer.create(<CreateUser/>).getInstance();
})
