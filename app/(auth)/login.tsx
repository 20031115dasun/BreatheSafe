import {Text, TextInput, TouchableOpacity, View , Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {router} from "expo-router";
import {icons} from "@/constants/icons";

export default function Login() {
  return (
      <SafeAreaView className="flex-1 bg-brand-soft">
        <View className="flex-1 px-6 justify-center">
          <Image
              source={icons.logo}
              className="w-40 h-40 self-center mt-2"
          />
          <View className="items-center mb-10">
            <Text className="text-3xl font-bold text-brand-dark mt-5">Welcome Back</Text>
            <Text className="text-brand-muted text-base mt-2 text-center">
              Login to continue to your account
            </Text>
          </View>

          {/* Form Card */}
          <View className="bg-brand-card rounded-3xl p-6 shadow-soft">
            <View className="mb-4">
              <Text className="text-brand-text mb-2 font-semibold">Email</Text>I<TextInput
                  placeholder="Enter your email"
                  placeholderTextColor="#64748B"
                  keyboardType="email-address"
                  className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4 text-brand-dark"
              />
            </View>

            <View className="mb-3">
              <Text className="text-brand-text mb-2 font-semibold">Password</Text>
              <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor="#64748B"
                  secureTextEntry
                  className="bg-brand-inputBg border border-brand-border rounded-2xl px-4 py-4 text-brand-dark"
              />
            </View>

            <TouchableOpacity className="self-end mb-5">
              <Text className="text-brand-primary font-semibold">Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-brand-primary rounded-2xl py-4 items-center">
              <Text className="text-brand-white text-base font-bold">Login</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-6">
              <Text className="text-brand-muted">Don’t have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/signup')}>
                <Text className="text-brand-accent font-bold">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
  );
}
