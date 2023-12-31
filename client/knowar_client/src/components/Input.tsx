import React from 'react';
import {TextInput, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {COLOR_LIST} from '../constants/colors';

interface InputProps {
  placeholder: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  placeholderTextColor?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

export default function Input({
  placeholder,
  style,
  textStyle,
  placeholderTextColor,
  keyboardType,
  secureTextEntry,
  onChangeText,
}: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.input, style, textStyle]}
      placeholderTextColor={placeholderTextColor || '#fff'}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'white',
    textAlign: 'center',
    borderRadius: 20,
    height: 45,
    marginHorizontal: 35,
    color: COLOR_LIST.neonPink,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: 'white',
  },
});
