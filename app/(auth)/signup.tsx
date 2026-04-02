import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { icons } from "@/constants/icons";

export default function Signup() {
    return (
        <SafeAreaView className="flex-1 bg-brand-soft">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View className="flex-1 px-6 justify-center py-8">
                            <Image
                                source={icons.logo}
                                className="w-20 h-20 self-center mb-4"
                                resizeMode="contain"
                            />

                            <View className="items-center mb-8">
                                <Text className="text-3xl font-bold text-brand-dark mt-2">
                                    Create Account
                                </Text>
                                <Text className="text-brand-muted text-base mt-2 text-center">
                                    Sign up to continue and start using your account
                                </Text>
                            </View>

                            <View className="bg-brand-card rounded-3xl p-6 shadow-soft">
                                <View className="mb-4">
                                    <Text className="text-brand-text mb-2 font-semibold">
                                        Full Name
                                    </Text>
                                    <TextInput
                                        placeholder="Enter your full name"
                                        placeholderTextColor="#64748B"
                                        style={{ color: "#0F172A" }}
                                        className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4"
                                    />
                                </View>

                                <View className="mb-4">
                                    <Text className="text-brand-text mb-2 font-semibold">
                                        Email
                                    </Text>
                                    <TextInput
                                        placeholder="Enter your email"
                                        placeholderTextColor="#64748B"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        style={{ color: "#0F172A" }}
                                        className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4"
                                    />
                                </View>

                                <View className="mb-4">
                                    <Text className="text-brand-text mb-2 font-semibold">
                                        Password
                                    </Text>
                                    <TextInput
                                        placeholder="Create a password"
                                        placeholderTextColor="#64748B"
                                        secureTextEntry
                                        style={{ color: "#0F172A" }}
                                        className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4"
                                    />
                                </View>

                                <View className="mb-5">
                                    <Text className="text-brand-text mb-2 font-semibold">
                                        Confirm Password
                                    </Text>
                                    <TextInput
                                        placeholder="Confirm your password"
                                        placeholderTextColor="#64748B"
                                        secureTextEntry
                                        style={{ color: "#0F172A" }}
                                        className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4"
                                    />
                                </View>

                                <TouchableOpacity className="bg-brand-accent rounded-2xl py-4 items-center">
                                    <Text className="text-brand-white text-base font-bold">
                                        Sign Up
                                    </Text>
                                </TouchableOpacity>

                                <View className="flex-row justify-center mt-6">
                                    <Text className="text-brand-muted">
                                        Already have an account?{" "}
                                    </Text>
                                    <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                                        <Text className="text-brand-primary font-bold">Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}