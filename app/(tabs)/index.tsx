import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { books } from '../../assets/data/books';
import { theme } from '../../constants/Theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Perpustakaan PKBM</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Link href={`/book/${item.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: item.cover }} style={styles.cover} />
              <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <View style={styles.meta}>
                  <Ionicons name="calendar-outline" size={14} color={theme.colors.iconDefault} />
                  <Text style={styles.metaText}>{item.year}</Text>
                  <Ionicons name="book-outline" size={14} color={theme.colors.iconDefault} style={styles.metaIcon} />
                  <Text style={styles.metaText} numberOfLines={1}>{item.publisher}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: theme.spacing.medium,
    color: theme.colors.textPrimary,
  },
  listContent: {
    paddingBottom: theme.spacing.large,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.medium,
    overflow: 'hidden',
    ...theme.shadow.card,
  },
  cover: {
    width: 90,
    height: 120,
    backgroundColor: theme.colors.border,
  },
  info: {
    flex: 1,
    padding: theme.spacing.medium,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  },
  author: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginVertical: 4,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaIcon: {
    marginLeft: theme.spacing.large,
  },
  metaText: {
    fontSize: 12,
    color: theme.colors.textTertiary,
    marginLeft: 4,
  },
});