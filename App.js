import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform,
  Animated,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const COLOR_ROJO_ESPAÑA = '#C60B1E';
const COLOR_AMARILLO_ESPAÑA = '#FFC400';
const COLOR_AZUL_CARD = '#0B2B70';
const COLOR_CELESTE_BANDERA = '#75AADB';

// --- SplashScreen ---
function SplashScreen({ navigation }) {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(animationValue, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: Platform.OS !== 'web',
    });

    animation.start();
    return () => animation.stop();
  }, [animationValue]);

  const spin = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  const opacityImg1 = animationValue.interpolate({
    inputRange: [0, 0.5, 0.8],
    outputRange: [1, 0.4, 0],
  });

  const opacityImg2 = animationValue.interpolate({
    inputRange: [0.2, 0.7, 1],
    outputRange: [0, 0.5, 1],
  });

  return (
    <View style={styles.splashContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR_ROJO_ESPAÑA} />
      <ImageBackground
        source={require('./assets/fondo_esp.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.splashBgStyle}
      >
        <View style={styles.centerBox}>
          <View style={styles.imageContainer}>
            <Animated.Image
              source={require('./assets/españa.jpg')}
              style={[
                styles.logoAbsolute,
                { opacity: opacityImg1, transform: [{ rotate: spin }] },
              ]}
              resizeMode="contain"
            />
            <Animated.Image
              source={require('./assets/españa.jpg')}
              style={[
                styles.logoAbsolute,
                { opacity: opacityImg2, transform: [{ rotate: spin }] },
              ]}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.splashTitle}>España - La Roja</Text>
          <Text style={styles.loadingText}>Real Federación Española de Fútbol</Text>

          <TouchableOpacity
            style={styles.splashButton}
            onPress={() => navigation.replace('MainApp')}
            activeOpacity={0.8}
          >
            <Text style={styles.splashButtonText}>Entrar a la App</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

// --- HomeScreen ---
function HomeScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.homeScrollContent}
      >
        <View style={styles.responsiveContent}>
          <View style={styles.welcomeBanner}>
            <Text style={styles.welcomeTitle}>Hola, Carolina</Text>
            <Text style={styles.welcomeSubtitle}>Torneo de selecciones 2026</Text>
          </View>

          <Text style={styles.sectionCategoryTitle}>SEGUNDO LUGAR</Text>

          <View style={styles.argentinaCard}>
            <View style={styles.flagContainer}>
              <View style={styles.flagStripeCelesteTop} />
              <View style={styles.flagStripeWhite}>
                <Text style={styles.countryName}>ARGENTINA</Text>
              </View>
              <View style={styles.flagStripeCelesteBottom} />
            </View>

            <View style={styles.cardDetails}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Director técnico</Text>
                <Text style={styles.infoValueBold}>L. Scaloni</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Capitán</Text>
                <Text style={styles.infoValueBold}>L. Messi</Text>
              </View>

              <View style={[styles.infoRow, styles.lastInfoRow]}>
                <Text style={styles.infoLabel}>Final</Text>
                <Text style={styles.infoValueBold}>1 - 2</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- EspanaScreen ---
function EspanaScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.homeScrollContent}
      >
        <View style={styles.responsiveContent}>
          <View style={styles.spainHeaderContainer}>
            <Text style={styles.spainHeaderTitle}>España</Text>
            <Text style={styles.spainHeaderSubtitle}>Selección campeona</Text>
          </View>

          <View style={styles.argentinaCard}>
            <View style={styles.spainFlagContainer}>
              <View style={styles.flagStripeRedTop} />
              <View style={styles.flagStripeYellow}>
                <Text style={styles.spainCountryText}>ESPAÑA</Text>
              </View>
              <View style={styles.flagStripeRedBottom} />
            </View>

            <View style={styles.cardDetails}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Director técnico</Text>
                <Text style={styles.infoValueBold}>L. de la Fuente</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Capitán</Text>
                <Text style={styles.infoValueBold}>Á. Morata</Text>
              </View>

              <View style={[styles.infoRow, styles.lastInfoRow]}>
                <Text style={styles.infoLabel}>Final</Text>
                <Text style={styles.infoValueBold}>2 - 1</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionCategoryTitle}>JUGADORES DESTACADOS</Text>

          <View style={styles.playersCard}>
            <View style={styles.playerRow}>
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>19</Text>
              </View>
              <Text style={styles.playerName}>Lamine Yamal</Text>
              <Text style={styles.playerPosition}>Extremo</Text>
            </View>

            <View style={styles.playerRow}>
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>16</Text>
              </View>
              <Text style={styles.playerName}>Rodri</Text>
              <Text style={styles.playerPosition}>Volante</Text>
            </View>

            <View style={[styles.playerRow, styles.lastInfoRow]}>
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>17</Text>
              </View>
              <Text style={styles.playerName}>Nico Williams</Text>
              <Text style={styles.playerPosition}>Extremo</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- AcercaDeScreen ---
function AcercaDeScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.responsiveContent}>
          <View style={styles.headerBox}>
            <Text style={styles.headerSubtitle}>INFORMACIÓN DEL DESARROLLADOR</Text>
            <Text style={styles.headerMainTitle}>Acerca de</Text>
            <View style={styles.minimalDivider} />
          </View>

          <View style={styles.profileCard}>
            <Image
              source={require('./assets/lis.jpg')}
              style={styles.profileImage}
              resizeMode="cover"
            />
            <Text style={styles.developerName}>Carolina Vasco</Text>

            <View style={styles.infoDetailsContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Carrera</Text>
                <Text style={styles.infoValue}>Sistemas de información</Text>
              </View>

              <View style={[styles.infoRow, styles.lastInfoRow]}>
                <Text style={styles.infoLabel}>Semestre</Text>
                <Text style={styles.infoValue}>Décimo semestre</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- MainTabs ---
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLOR_AZUL_CARD,
        tabBarInactiveTintColor: '#A0AEC0',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
          height: Platform.OS === 'ios' ? 95 : 75,
          paddingBottom: Platform.OS === 'ios' ? 32 : 16,
          paddingTop: 8,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color }) => {
          let iconSymbol = '🏠';
          if (route.name === 'Home') iconSymbol = '🏠';
          else if (route.name === 'España') iconSymbol = '🏁';
          else if (route.name === 'Acerca de') iconSymbol = '👥';

          return <Text style={{ fontSize: 18, color }}>{iconSymbol}</Text>;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="España" component={EspanaScreen} />
      <Tab.Screen name="Acerca de" component={AcercaDeScreen} />
    </Tab.Navigator>
  );
}

// --- App ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainApp" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- StyleSheet ---
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: COLOR_ROJO_ESPAÑA,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  splashBgStyle: {
    opacity: 0.12,
  },
  centerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 210,
    height: 210,
    marginBottom: 20,
    position: 'relative',
  },
  logoAbsolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  splashTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLOR_AMARILLO_ESPAÑA,
    letterSpacing: 3,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 6,
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'center',
  },
  splashButton: {
    marginTop: 35,
    backgroundColor: COLOR_AMARILLO_ESPAÑA,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 25,
    elevation: 3,
  },
  splashButtonText: {
    color: '#1A202C',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  homeScrollContent: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 10 : 25,
    paddingBottom: 30,
  },
  responsiveContent: {
    width: '100%',
    maxWidth: 550,
    alignSelf: 'center',
  },
  welcomeBanner: {
    backgroundColor: COLOR_AZUL_CARD,
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 25,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  welcomeSubtitle: {
    fontSize: 13,
    color: '#D0D9F0',
    fontWeight: '400',
  },
  sectionCategoryTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 1.5,
    marginTop: 25,
    marginBottom: 15,
  },
  argentinaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  flagContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  flagStripeCelesteTop: {
    height: 22,
    backgroundColor: COLOR_CELESTE_BANDERA,
  },
  flagStripeWhite: {
    height: 35,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagStripeCelesteBottom: {
    height: 22,
    backgroundColor: COLOR_CELESTE_BANDERA,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    letterSpacing: 3,
  },
  spainHeaderContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  spainHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  spainHeaderSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
  spainFlagContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  flagStripeRedTop: {
    height: 18,
    backgroundColor: COLOR_ROJO_ESPAÑA,
  },
  flagStripeYellow: {
    height: 38,
    backgroundColor: COLOR_AMARILLO_ESPAÑA,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagStripeRedBottom: {
    height: 18,
    backgroundColor: COLOR_ROJO_ESPAÑA,
  },
  spainCountryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#701A06',
    letterSpacing: 3,
  },
  playersCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  badgeContainer: {
    backgroundColor: '#F1F5F9',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 14,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#64748B',
  },
  playerName: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  playerPosition: {
    fontSize: 13,
    color: '#64748B',
  },
  cardDetails: {
    paddingHorizontal: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  lastInfoRow: {
    borderBottomWidth: 0,
  },
  infoLabel: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  infoValueBold: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 20,
  },
  headerBox: {
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A0AEC0',
    letterSpacing: 2,
    marginBottom: 4,
  },
  headerMainTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#2D3748',
    letterSpacing: -0.5,
  },
  minimalDivider: {
    width: 40,
    height: 3,
    backgroundColor: COLOR_ROJO_ESPAÑA,
    marginTop: 12,
    marginBottom: 10,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    marginTop: 10,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 16,
  },
  developerName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 16,
  },
  infoDetailsContainer: {
    width: '100%',
    marginTop: 8,
  },
  infoValue: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '600',
  },
});