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
  Alert,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// --- 1. PANTALLA DE BIENVENIDA (SPLASH SCREEN) ---
function SplashScreen({ navigation }) {
  const animationValue = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
      Animated.timing(animationValue, {
    toValue: 1,
    duration: 2500,
    useNativeDriver: Platform.OS !== 'web',
  }).start();

  const timer = setTimeout(() => {
    navigation.replace('Home');
  }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/fondo.png')} 
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.12 }}
      >
        <View style={styles.centerBox}>
          <View style={styles.imageContainer}>
            <Animated.Image 
              source={require('./assets/ec.png')} 
              style={[styles.logoAbsolute, { opacity: opacityImg1, transform: [{ rotate: spin }] }]}
              resizeMode="contain"
            />
            <Animated.Image 
              source={require('./assets/ec2.png')} 
              style={[styles.logoAbsolute, { opacity: opacityImg2, transform: [{ rotate: spin }] }]}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.splashTitle}>Ecuador - La Tri</Text>
          <Text style={styles.loadingText}>Selección Ecuatoriana de Fútbol</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// --- 2. PANTALLA DE INICIO (HOME SCREEN - MINIMALISTA & PROFESIONAL) ---
function HomeScreen() {

  const mostrarMensaje = () => {
  if (Platform.OS === 'web') {
    alert("¡Vamos Ecuador! La Tri representa el orgullo de todos los ecuatorianos.");
  } else {
    Alert.alert(
      "¡Vamos Ecuador!",
      "La Tri representa el orgullo de todos los ecuatorianos."
    );
  }
};

  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ImageBackground
        source={require('./assets/home.png')}
        style={styles.homeBgImage}
        imageStyle={styles.homeBgStyle}
      >
        <View style={styles.minimalHeader}>
          <Text style={styles.headerSubtitle}>
            FEDERACIÓN ECUATORIANA DE FÚTBOL
          </Text>

          <Text style={styles.headerMainTitle}>
            Selección Nacional
          </Text>

          <Image
            source={require('./assets/seleccion.png')}
            style={styles.floatingHeaderImage}
            resizeMode="contain"
          />

          <View style={styles.minimalDivider} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.homeScroll}
        >
          <View style={styles.responsiveContent}>

            {/* PERFIL OFICIAL */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>01</Text>
              <Text style={styles.sectionTitle}>PERFIL OFICIAL</Text>
            </View>

            <View style={styles.minimalCard}>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Seudónimo</Text>
                <Text style={styles.infoValue}>La Tri</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Confederación</Text>
                <Text style={styles.infoValue}>CONMEBOL</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Entrenador</Text>
                <Text style={styles.infoValue}>Sebastián Beccacece</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Estadio</Text>
                <Text style={styles.infoValue}>Rodrigo Paz Delgado</Text>
              </View>

            </View>

            {/* HISTORIA */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>02</Text>
              <Text style={styles.sectionTitle}>HISTORIA</Text>
            </View>

            <View style={styles.minimalCard}>
              <Text style={styles.editorialParagraph}>
                La Selección Ecuatoriana de Fútbol representa al Ecuador en
                competiciones internacionales organizadas por FIFA y CONMEBOL.
              </Text>

              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>▪</Text>
                <Text style={styles.bulletText}>
                  Participó en los Mundiales de 2002, 2006, 2014 y 2022.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>▪</Text>
                <Text style={styles.bulletText}>
                  Su mejor actuación fue llegar a octavos de final en Alemania 2006.
                </Text>
              </View>
            </View>

            {/* BOTÓN INTERACTIVO */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>03</Text>
              <Text style={styles.sectionTitle}>INTERACCIÓN</Text>
            </View>

            <View style={styles.minimalCard}>
              <TouchableOpacity
                style={styles.button}
                onPress={mostrarMensaje}
              >
                <Text style={styles.buttonText}>
                  Mostrar Mensaje
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
              Aplicación desarrollada con React Native y Expo
            </Text>

          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
// --- 3. ENRUTADOR DE LA APLICACIÓN ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- 4. ESTILOS DE LA INTERFAZ ---
const styles = StyleSheet.create({
  // --- Estilos Splash ---
  container: {
    flex: 1,
    backgroundColor: '#FFD700', 
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  centerBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 210,
    height: 210,
    marginBottom: 25,
    position: 'relative',
  },
  logoAbsolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  splashTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#0033A0',
    letterSpacing: 6,
  },
  loadingText: {
    fontSize: 14,
    color: '#DA291C',
    marginTop: 8,
    fontStyle: 'italic',
    fontWeight: '500',
  },

  // --- Estilos Home Screen (Minimalista y Profesional) ---
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  homeBgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // --- AQUÍ SE SUBIÓ EL TONO DE LA MARCA DE AGUA ---
  homeBgStyle: {
    opacity: 0.18, // Subido de 0.05 a 0.18 para que tenga más fuerza y presencia
    resizeMode: 'cover',
  },
  minimalHeader: {
    position: 'relative',
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
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
    color: '#1A202C',
    letterSpacing: -0.5,
  },
  floatingHeaderImage: {
    position: 'absolute',
    right: 24,
    bottom: 10,
    width: 80,
    height: 60,
    zIndex: 10,
  },
  minimalDivider: {
    width: 40,
    height: 3,
    backgroundColor: '#0033A0', 
    marginTop: 12,
    marginBottom: 10,
  },
  homeScroll: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  responsiveContent: {
    width: '100%',
    maxWidth: 550,
    alignSelf: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
  sectionNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0033A0',
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4A5568',
    letterSpacing: 1.5,
  },
  minimalCard: {
    backgroundColor: 'rgba(247, 250, 252, 0.75)', 
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
  },
  infoLabel: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#2D3748',
    fontWeight: '600',
  },
  editorialParagraph: {
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'justify',
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 10,
    color: '#DA291C',
    marginRight: 10,
    marginTop: 4,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: '700',
    color: '#1A202C',
  },
  quoteText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#4A5568',
    textAlign: 'center',
    lineHeight: 24,
  },
  footerText: {
    fontSize: 11,
    color: '#A0AEC0',
    textAlign: 'center',
    marginTop: 40,
    letterSpacing: 1,
  },
  button: {
  backgroundColor: '#0033A0',
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
},

buttonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
},
});