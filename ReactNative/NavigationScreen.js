      <View style={styles.container}>
        <Text>You are on the home page</Text>
//On button click, we will navigate to the about page.
        <Button
            title="About page"
            onPress={() => this.props.navigation.navigate('About')}
        />// Button has two props i.e title and onPress
// On onPress, we are calling the navigate function on this.props.navigation.
//As our HomeScreen is included in the stack.navigator so this.props.navigation will inherit props from the navigation object.

      </View>



        <View style ={{
            justifyContent:'center',
            alignItems:'center'
          }}>
            <View>
              <Text style={styles.forget}
               onPress = {() => navigation.navigate(ForgotPassword)}
              >Forgot password?</Text>
            </View>
        </View>
