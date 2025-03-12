import { View, Modal, Text, TouchableOpacity, Image } from "react-native";
import { useState, React } from "react";

const characterUrl = {
  "nombre-1": require("../assets/characters/nombre-1.png"),
  "nombre-2": require("../assets/characters/nombre-2.png"),
  "nombre-3": require("../assets/characters/nombre-3.png"),
  "nombre-4": require("../assets/characters/nombre-4.png"),
  "nombre-5": require("../assets/characters/nombre-5.png"),
  "nombre-6": require("../assets/characters/nombre-6.png"),
  "nombre-7": require("../assets/characters/nombre-7.png"),
  "nombre-8": require("../assets/characters/nombre-8.png"),
  "nombre-9": require("../assets/characters/nombre-9.png"),
  "nombre-10": require("../assets/characters/nombre-10.png"),
  "nombre-11": require("../assets/characters/nombre-11.png"),
  "nombre-12": require("../assets/characters/nombre-12.png"),
  "nombre-13": require("../assets/characters/nombre-13.png"),
  "nombre-14": require("../assets/characters/nombre-14.png"),
  "nombre-15": require("../assets/characters/nombre-15.png"),
  "nombre-16": require("../assets/characters/nombre-16.png"),
  "nombre-17": require("../assets/characters/nombre-17.png"),
  "nombre-18": require("../assets/characters/nombre-18.png"),
  "nombre-19": require("../assets/characters/nombre-19.png"),
  "nombre-20": require("../assets/characters/nombre-20.png"),
  "nombre-21": require("../assets/characters/nombre-21.png"),
  "nombre-22": require("../assets/characters/nombre-22.png"),
  "nombre-23": require("../assets/characters/nombre-23.png"),
  "nombre-24": require("../assets/characters/nombre-24.png"),
  "nombre-25": require("../assets/characters/nombre-25.png"),
  "nombre-26": require("../assets/characters/nombre-26.png"),
  "nombre-27": require("../assets/characters/nombre-27.png"),
  "nombre-28": require("../assets/characters/nombre-28.png"),
  "nombre-29": require("../assets/characters/nombre-29.png"),
  "nombre-30": require("../assets/characters/nombre-30.png"),
  "nombre-31": require("../assets/characters/nombre-31.png"),
};

export const CharacterCard = (props) => {
  // Asegurarse de que props.image sea un número
  const imageNumber = `${props.image}`;
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  return (
    <View className="flex-row gap-4 border-2 border-gray-400  mb-4bg-gray-200 rounded-full p-3">
      <TouchableOpacity className="" onPress={openModal}>
        <Image
          source={
            characterUrl[imageNumber]
              ? characterUrl[imageNumber]
              : require("../assets/characters/nombre-1.png") // Imagen por defecto
          }
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            position: "relative",
          }}
        />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50 justify-center">
          <Image
            source={
              characterUrl[imageNumber]
                ? characterUrl[imageNumber]
                : require("../assets/characters/nombre-1.png") // Imagen por defecto
            }
            style={{
              resizeMode: "cover",
              position: "relative",
            }}
          />

          {/* Botón para cerrar el modal */}
          <TouchableOpacity
            className="bg-gray-400 px-4 py-2 w-10 h-10 mt-10 rounded-full"
            onPress={closeModal}
          >
            <Text className="text-white">X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
