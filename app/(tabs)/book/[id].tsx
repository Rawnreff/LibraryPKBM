import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { books } from '../../../assets/data/books';
import { theme } from '../../../constants/Theme';

export default function BookDetail() {  
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.textPrimary} />
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <Ionicons name="book-outline" size={40} color={theme.colors.placeholder} />
          <Text style={styles.notFound}>Buku tidak ditemukan</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.coverContainer}>
          <Image source={{ uri: book.cover }} style={styles.cover} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>oleh {book.author}</Text>

          <View style={styles.meta}>
            <Ionicons name="calendar-outline" size={16} color={theme.colors.iconDefault} />
            <Text style={styles.metaText}>{book.year}</Text>
            <Text style={styles.separator}>·</Text>
            <Text style={styles.metaText}>{book.publisher}</Text>
          </View>

          <Text style={styles.description}>{book.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing.large,
    paddingTop: theme.spacing.medium,
    paddingBottom: theme.spacing.medium,
  },
  backButton: {
    width: 40,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xLarge, // Extra padding for bottom safe area
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.large,
  },
  notFound: {
    fontSize: 16,
    color: theme.colors.placeholder,
    marginTop: theme.spacing.small,
  },
  coverContainer: {
    paddingHorizontal: theme.spacing.large,
  },
  cover: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.border,
  },
  content: {
    padding: theme.spacing.large,
    paddingTop: theme.spacing.medium,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xSmall,
  },
  author: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.medium,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.large,
  },
  metaText: {
    fontSize: 14,
    color: theme.colors.textTertiary,
    marginLeft: theme.spacing.xSmall,
  },
  separator: {
    fontSize: 14,
    color: theme.colors.textTertiary,
    marginHorizontal: theme.spacing.xSmall,
  },
  description: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
});