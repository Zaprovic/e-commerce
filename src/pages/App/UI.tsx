import { BrowserRouter } from "react-router-dom";
import CheckoutSideMenu from "../../components/CheckoutMenu";
import Navbar from "../../components/Navbar";
import MainLayout from "../../layouts/MainLayout";
import GlobalProvider from "../../providers/global";
import AppRoutes from "../../routes/AppRoutes";

const UI = () => {
	return (
		<>
			<GlobalProvider>
				<MainLayout>
					<BrowserRouter>
						<AppRoutes />
						<Navbar />
						<CheckoutSideMenu />
					</BrowserRouter>
				</MainLayout>
			</GlobalProvider>
		</>
	);
};

export default UI;
