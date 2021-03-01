import React from 'react';
import Messages from "./Messages";
import renderer from 'react-test-renderer';

test('component should renders properly', () => {
    renderer.create(<Messages messages={[]} name={"test"}/>).getInstance();
})