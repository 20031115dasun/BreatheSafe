import { View, Text, Modal, TouchableOpacity } from "react-native";

export default function CustomAlert({ visible, type, message, onClose }:any) {
    const isSuccess = type === "success";

    return (
        <Modal transparent animationType="fade" visible={visible}>
            <View className="flex-1 bg-black/40 justify-center items-center px-6">
                <View className="w-full bg-white rounded-3xl p-6 items-center">

                    {/* Icon Circle */}
                    <View
                        className={`w-16 h-16 rounded-full items-center justify-center mb-4 ${
                            isSuccess ? "bg-brand-accent" : "bg-red-500"
                        }`}
                    >
                        <Text className="text-white text-2xl font-bold">
                            {isSuccess ? "✓" : "✕"}
                        </Text>
                    </View>

                    {/* Title */}
                    <Text className="text-xl font-bold text-brand-dark mb-2">
                        {isSuccess ? "Success" : "Error"}
                    </Text>

                    {/* Message */}
                    <Text className="text-brand-muted text-center mb-6">

                        {message}
                    </Text>

                    {/* Button */}
                    <TouchableOpacity
                        onPress={onClose}
                        className="bg-brand-primary w-full py-3 rounded-xl items-center"
                    >
                        <Text className="text-white font-bold">OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}