import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../constants/Theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://fisika.uad.ac.id/wp-content/uploads/blank-profile-picture-973460_1280.png' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Siswa PKBM</Text>
          <Text style={styles.email}>siswa@pkbm.sch.id</Text>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.option}>
            <Ionicons name="bookmark-outline" size={22} color={theme.colors.iconActive} />
            <Text style={styles.optionText}>Buku Favorit</Text>
            <Ionicons 
              name="chevron-forward-outline" 
              size={20} 
              color={theme.colors.iconDefault} 
              style={styles.optionIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="time-outline" size={22} color={theme.colors.iconActive} />
            <Text style={styles.optionText}>Riwayat Peminjaman</Text>
            <Ionicons 
              name="chevron-forward-outline" 
              size={20} 
              color={theme.colors.iconDefault} 
              style={styles.optionIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="settings-outline" size={22} color={theme.colors.iconActive} />
            <Text style={styles.optionText}>Pengaturan</Text>
            <Ionicons 
              name="chevron-forward-outline" 
              size={20} 
              color={theme.colors.iconDefault} 
              style={styles.optionIcon}
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.option}>
            <Ionicons name="log-out-outline" size={22} color="#e74c3c" />
            <Text style={[styles.optionText, { color: '#e74c3c' }]}>Keluar</Text>
            <Ionicons 
              name="chevron-forward-outline" 
              size={20} 
              color="#e74c3c" 
              style={styles.optionIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.large,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: theme.spacing.large,
    marginTop: theme.spacing.medium,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: theme.spacing.medium,
    backgroundColor: theme.colors.border,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.small,
  },
  email: {
    fontSize: 14,
    color: theme.colors.textTertiary,
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.medium,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.small,
  },
  optionText: {
    flex: 1,
    marginLeft: theme.spacing.medium,
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
  optionIcon: {
    marginLeft: theme.spacing.small,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.small,
  },
});