import * as React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={{ height: '100%', backgroundColor: 'lightblue' }}>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 20,
              color: 'white',
            }}>
            Login
          </Text>

          <TextInput
            placeholder="Enter email"
            style={styles.input1}
            onChangeText={(data) => {
              this.setState({
                email: data,
              });
            }}
            value={this.state.email}
          />

          <TextInput
            placeholder="Enter password"
            style={styles.input2}
            onChangeText={(data) => {
              this.setState({
                password: data,
              });
            }}
            secureTextEntry={true}
            value={this.state.password}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (this.state.email && this.state.password) {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                  )
                  .then(()=>{
                    
                  })
                  .catch((error) => {
                    var erromsg = error.message;
                  });
              } else {
                alert('Enter email and password');
              }
            }}>
            <Text style={styles.txt}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              if (this.state.email && this.state.password) {
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(this.state.email, this.state.password)
                  .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    alert("Successfuly created account")
                    // ...
                  })
                  .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                    // ..
                  });
              }
              else{
                alert("Enter email and password")
              }
            }}>
            <Text style={styles.txt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input1: {
    borderWidth: 1,
    width: 200,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    marginTop: 60,
  },
  input2: {
    borderWidth: 1,
    width: 200,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    marginTop: 30,
  },
  btn: {
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'blue',
    marginTop: 60,
    borderColor: 'blue',
  },
  btn2: {
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'blue',
    marginTop: 30,
    borderColor: 'blue',
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
