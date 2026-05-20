import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import NativeBase64Module from './specs/NativeBase64Module';
import {arrayBufferToText, textToArrayBuffer} from './src/textBuffer';

function App(): React.JSX.Element {
  const [plainText, setPlainText] = React.useState('Hello, native base64!');
  const [base64Text, setBase64Text] = React.useState('');
  const [roundTripText, setRoundTripText] = React.useState('');

  const onEncode = () => {
    const buffer = textToArrayBuffer(plainText);
    const encoded = NativeBase64Module.base64FromArrayBuffer(buffer, false);
    setBase64Text(encoded);
  };

  const onDecode = () => {
    const buffer = NativeBase64Module.base64ToArrayBuffer(
      base64Text,
      false,
    ) as ArrayBuffer;
    setRoundTripText(arrayBufferToText(buffer));
  };

  const onRoundTrip = () => {
    const buffer = textToArrayBuffer(plainText);
    const encoded = NativeBase64Module.base64FromArrayBuffer(buffer, false);
    const decoded = NativeBase64Module.base64ToArrayBuffer(
      encoded,
      false,
    ) as ArrayBuffer;
    setBase64Text(encoded);
    setRoundTripText(arrayBufferToText(decoded));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.title}>Native C++ Base64 (Turbo Module)</Text>
        <Text style={styles.label}>Plain text</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Text to encode"
          onChangeText={setPlainText}
          value={plainText}
        />
        <View style={styles.row}>
          <Button title="Encode" onPress={onEncode} />
          <Button title="Decode" onPress={onDecode} />
          <Button title="Round-trip" onPress={onRoundTrip} />
        </View>
        <Text style={styles.label}>Base64</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Base64 output (edit to test decode)"
          onChangeText={setBase64Text}
          value={base64Text}
          multiline
        />
        <Text style={styles.label}>Decoded</Text>
        <Text style={styles.output}>{roundTripText || '—'}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  panel: {
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  label: {
    marginTop: 8,
    fontWeight: '500',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  output: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    minHeight: 40,
  },
});

export default App;
