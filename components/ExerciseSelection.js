import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const ExerciseSelection = ({ exercises, onExerciseSelect }) => {
  const renderItem = ({ item }) => (
    <Text onPress={() => onExerciseSelect(item)}>
      {item.name}
    </Text>
  );

  return (
    <FlatList
      data={exercises}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExerciseSelection;