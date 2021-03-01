import React from 'react';
import Message from "./Message";
import renderer from 'react-test-renderer';

test('component should renders properly', () => {
    renderer.create(<Message message={[]} name={"test"}/>).getInstance();
})
