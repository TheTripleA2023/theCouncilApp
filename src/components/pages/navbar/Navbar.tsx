"use client";

import {
	Button,
	Box,
	Flex,
	HStack,
	IconButton,
	useDisclosure,
	Stack,
	Spacer,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
	Drawer,
	DrawerOverlay,
	DrawerHeader,
	DrawerBody,
	DrawerContent,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import LogOutButton from "./LogOutButton";
import LoginButton from "../misc/LoginButton";
import Link from "next/link";
import NavLink from "./Navlink";

const Links = ["About", "Usage Disclaimer"];

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [session, setSession] = useState(null);
	const [loading, setLoading] = useState(false);
	const supabase = createClientComponentClient();
	// const router = useRouter();
	// const handleRefresh = () => {
	//   router.reload();
	// };
	useEffect(() => {
		const getSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			setSession(session !== null);
			setLoading(true);
		};

		getSession();
	}, [supabase, setSession]);

	return (
		<>
			<Flex
				className="navbar"
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				minWidth="max-content"
			>
				<Box
					marginLeft={[4, 12, 24, 48]}
					fontSize={["24px", "32px"]}
					className="navbar-title"
				>
					<Link href={"/"} replace={true}>
						the Council.
					</Link>
				</Box>
				<Spacer />
				<HStack
					as={"nav"}
					spacing={5}
					marginRight={[4, 12, 24, 48]}
					display={{ base: "none", md: "flex" }}
				>
					{Links.map((link) => (
						<NavLink key={link + "_desktop"}>{link}</NavLink>
					))}
					<Button
						as="a"
						href="https://forms.gle/L2yowVgJsdSHZW888"
						target="_blank"
						rel="noopener noreferrer"
						px={5}
						py={2}
						rounded={"md"}
						fontWeight={600}
						borderWidth={"2px"}
						borderColor={"transparent"}
						color={"white"}
						bg={"transparent"}
						_hover={{
							textDecoration: "none",
							borderColor: "white",
							bg: "gray.700",
						}}
					>
						Feedback Form
					</Button>

					{!loading ? null : session ? (
						<LogOutButton>Log Out</LogOutButton>
					) : (
						<LoginButton text={"Get Started!"} />
					)}
				</HStack>
				<IconButton
					size={"lg"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
					color={"white"}
					marginRight={4}
				/>
			</Flex>
			<Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent
					bg={"#21234B"}
					borderBottomRadius={"20px"}
					padding={"20px"}
				>
					<Flex direction={"row"}>
						<Box
							fontSize={["24px", "32px"]}
							className="navbar-title"
						>
							<Link href={"/"} replace={true}>
								the Council.
							</Link>
						</Box>
						<Spacer />
						<IconButton
							size={"lg"}
							icon={<CloseIcon />}
							aria-label={"Open Menu"}
							display={{ md: "none" }}
							onClick={onClose}
							color={"white"}
						/>
					</Flex>
					<Box marginTop={"20px"}>
						<NavLink>{"About"}</NavLink>
					</Box>
					<Box marginTop={"20px"}>
						<NavLink>{"Usage Disclaimer"}</NavLink>
					</Box>

					<Box marginTop={"20px"} />
					{!loading ? null : session ? (
						<LogOutButton>Log Out</LogOutButton>
					) : (
						<LoginButton text={"Get Started!"} />
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
}
