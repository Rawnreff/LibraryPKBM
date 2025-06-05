import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { books } from '../../assets/data/books';
import { theme } from '../../constants/Theme';

export default function ExploreScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Eksplorasi Buku</Text>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={theme.colors.placeholder} />
        <TextInput
          placeholder="Cari buku atau penulis..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholderTextColor={theme.colors.placeholder}
        />
      </View>

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="book-outline" size={40} color={theme.colors.placeholder} />
            <Text style={styles.emptyText}>Buku tidak ditemukan</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/book/${item.id}`)}
          >
            <Image 
              source={{ uri: item.cover }} 
              style={styles.cover} 
              resizeMode="cover"
            />
            <View style={styles.info}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <View style={styles.meta}>
                <Ionicons name="calendar-outline" size={14} color={theme.colors.iconDefault} />
                <Text style={styles.metaText}>{item.year}</Text>
                <Ionicons name="book-outline" size={14} color={theme.colors.iconDefault} style={styles.metaIcon} />
                <Text style={styles.metaText} numberOfLines={1}>{item.publisher}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    paddingHorizontal: theme.spacing.medium,
    paddingTop: theme.spacing.medium,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.medium,
    color: theme.colors.textPrimary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.small,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    marginBottom: theme.spacing.medium,
    ...theme.shadow.card,
  },
  searchInput: {
    marginLeft: theme.spacing.small,
    flex: 1,
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
  listContent: {
    paddingBottom: theme.spacing.large,
  },
  card: {
    flexDirection: 'row',
    marginBottom: theme.spacing.medium,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.medium,
    overflow: 'hidden',
    ...theme.shadow.card,
  },
  cover: {
    width: 90,
    height: 130,
    backgroundColor: theme.colors.border,
  },
  info: {
    flex: 1,
    padding: theme.spacing.medium,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  metaText: {
    fontSize: 12,
    color: theme.colors.textTertiary,
    marginRight: theme.spacing.medium,
    marginLeft: 4,
  },
  metaIcon: {
    marginLeft: theme.spacing.small,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.large,
  },
  emptyText: {
    textAlign: 'center',
    color: theme.colors.placeholder,
    marginTop: theme.spacing.small,
    fontStyle: 'italic',
    fontSize: 16,
  },
});