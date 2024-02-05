import { View, Text } from 'react-native'
import React from 'react'

export default function Rows({person}) {
    return (
        <Text>{person.lastname}, {person.firstname}</Text>
    )
}