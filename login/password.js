import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Zakładam, że korzystasz z Expo i biblioteki vector-icons

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={!showPassword}
        {...props}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={() => setShowPassword(prev => !prev)}>
        <Ionicons 
          name={showPassword ? "eye-off" : "eye"} 
          size={24} 
          color="grey"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ffa800',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
  },
  iconContainer: {
    padding: 10
  }
});

export default PasswordInput;
