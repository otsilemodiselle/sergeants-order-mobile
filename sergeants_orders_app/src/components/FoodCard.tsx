import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const FoodCard = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri:"https://loremflickr.com/640/480"}}
                style={styles.image}
            />
            <View>
                <Text style={styles.normalFont}>Hawaiian Pizza</Text>
                <Text style={styles.secondaryFont}>Pineapple and ham toppings</Text>
                <Text style={styles.priceFont}>R145</Text>
            </View>
            <View style={styles.maintainContainer}>
                <TouchableOpacity style={styles.circleButton}>
                    <MaterialIcons name="delete-outline" size={24} color="#E63946" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton}>
                    <Feather name="edit" size={20} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity: .1,
        shadowRadius:4,
        elevation:3,
        margin:10
    },
    maintainContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    circleButton:{
        height:35,
        width:35,
        borderRadius:18,
        backgroundColor:"#292929",
        justifyContent:"center",
        alignItems:"center",
        marginStart:10
    },
    image:{
        height: 120,
        width: "25%",
        marginRight: 10,
    },
    normalFont:{
        color:"#FFFFFF",
        fontSize: 24
    },
    priceFont:{
        color:"#F4D03F",
        fontSize: 24,
        marginTop: 5
    },
    secondaryFont:{
        color:"#B0B0B0",
        fontSize: 14
    }
})

export default FoodCard