import { StyleSheet, Text, View } from "react-native";

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.brand}>My Todos</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		paddingTop: 38,
		backgroundColor: "coral",
	},
	brand: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
});
