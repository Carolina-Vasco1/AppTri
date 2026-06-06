import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, Platform, Animated, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// --- 1. PANTALLA DE BIENVENIDA (SPLASH SCREEN) ---
function SplashScreen({ navigation }) {
  const animationValue = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 4500, 
      useNativeDriver: Platform.OS !== 'web',
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

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
          <Text style={styles.splashTitle}>LA TRI</Text>
          <Text style={styles.loadingText}>Cargando información...</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// --- 2. PANTALLA DE INICIO (HOME SCREEN - MINIMALISTA & PROFESIONAL) ---
function HomeScreen() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* MARCA DE AGUA PARA EL HOME */}
      <ImageBackground 
        source={require('./assets/home.png')} 
        style={styles.homeBgImage}
        imageStyle={styles.homeBgStyle}
      >
        {/* HEADER MINIMALISTA */}
        <View style={styles.minimalHeader}>
          <Text style={styles.headerSubtitle}>FEDERACIÓN ECUATORIANA DE FÚTBOL</Text>
          <Text style={styles.headerMainTitle}>Selección Nacional</Text>
          
          {/* IMAGEN FLOTANTE EN LA PARTE DERECHA */}
          <Image 
            source={require('./assets/seleccion.png')} 
            style={styles.floatingHeaderImage}
            resizeMode="contain"
          />
          
          <View style={styles.minimalDivider} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.homeScroll}>
          <View style={styles.responsiveContent}>
            
            {/* SECCIÓN: RESUMEN INSTITUCIONAL */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>01</Text>
              <Text style={styles.sectionTitle}>PERFIL OFICIAL</Text>
            </View>
            
            <View style={styles.minimalCard}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Seudónimo</Text>
                <Text style={styles.infoValue}>La Tri / La Tricolor</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Fundación</Text>
                <Text style={styles.infoValue}>30 de Mayo de 1925</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Asociación</Text>
                <Text style={styles.infoValue}>FEF (CONMEBOL)</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Ranking Mundial FIFA</Text>
                <Text style={styles.infoValue}> 23. Puesto</Text>
              </View>
            </View>

            {/* SECCIÓN: HITOS HISTÓRICOS */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>02</Text>
              <Text style={styles.sectionTitle}>COMPETICIONES GLOBALES</Text>
            </View>

            <View style={styles.minimalCard}>
              <Text style={styles.editorialParagraph}>
                Ecuador ha consolidado su presencia en el panorama internacional a través de un crecimiento sostenido en las últimas décadas, logrando hitos trascendentales en la historia del balompié sudamericano.
              </Text>
              
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>▪</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Copas del Mundo: </Text>Cuatro clasificaciones históricas absolutas: Corea-Japón 2002, Alemania 2006, Brasil 2014 y Qatar 2022.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>▪</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Máximo Logro: </Text>Clasificación a los Octavos de Final en la Copa Mundial de Alemania 2006.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>▪</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Goleador Histórico: </Text>Enner Valencia, con un registro legendario en citas mundialistas.
                </Text>
              </View>
            </View>

            {/* SECCIÓN: FILOSOFÍA */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>03</Text>
              <Text style={styles.sectionTitle}>IDENTIDAD INSTITUCIONAL</Text>
            </View>

            <View style={styles.minimalCard}>
              <Text style={styles.quoteText}>
                "El fútbol en Ecuador trasciende la cancha; es un pilar de unidad cultural que refleja la diversidad, la resiliencia y el orgullo indomable de toda una nación."
              </Text>
            </View>

            {/* FOOTER DISCRETO */}
            <Text style={styles.footerText}>Documentación Técnica Operativa • 2026</Text>

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
});