import { Box, Stack, Toolbar } from '@mui/material';
import React from 'react';
import HomeLink from "../../components/HomeLink/HomeLink";
import style from "./BazaAppBar.module.css";
import ListIcon from '@mui/icons-material/List';
import TocIcon from '@mui/icons-material/Toc';
import RightBar from '../RightBar/RightBar';
import RightMenu from './RightMenu/RightMenu';
import LeftMenu from './LeftMenu/LeftMenu';
import { styled } from '@mui/material/styles';





const BazaAppBar = ({ DisplayLeftMenu, DisplayRightMenu }) => {


	const BazaToolBar = styled(Toolbar)(

		{
			width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-around",

		}
	);


	const BazaToolBarListIcon = styled(ListIcon)(

		{
			cursor: "pointer", display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			fontSize: "2rem",
		}
	);


	const BazaToolBarTocIcon = styled(TocIcon)(
		{
			cursor: "pointer", display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			fontSize: "2rem",
		}
	)








	return (

		<>


			<Box className={style.BazaAppBar}  >

				<BazaToolBar    >

					<BazaToolBarListIcon
						onClick={DisplayLeftMenu}
					/>



					<HomeLink />

					<BazaToolBarTocIcon
						onClick={DisplayRightMenu} />

				</BazaToolBar>

			</Box>


		</>

	);
};

export default BazaAppBar;

