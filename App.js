import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

function App(){
  const ui=(
    <SafeAreaView>
      <StatusBar></StatusBar>
      <View style={styles.view1}>
        <Text>Hi</Text>
      </View>
    </SafeAreaView>
  );



  return ui;
}

const styles=styles.create(
  {
    view1:{
      backgroundColor:"red",
      flex:1,
    },
  }
);



export default App;