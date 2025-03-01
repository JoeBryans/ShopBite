"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { SignOut } from "./SignOut";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  CreditCard,
  LayoutDashboard,
  Settings,
  UserCheck,
  UserCircle2Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  role: string;
};
const GetUser = ({ role }: Props) => {
  const { data, status } = useSession();
  const path = usePathname();
  console.log(path);
  const start = path.startsWith("/dashboard");
  const user = data?.user;
  console.log(user);

  if (user) {
    return (
      <div className="flex items-center gap-5 mx-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {user.image === null ? (
              <UserCircle2Icon />
            ) : (
              <img src={user?.image} alt="photo" />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-5">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href={""}
                  className="flex w-full items-center justify-between"
                >
                  Profile
                  <DropdownMenuShortcut>
                    <UserCheck />
                  </DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              {role === "seller" ? (
                <>
                  {" "}
                  {start ? (
                    <DropdownMenuItem>
                      <Link
                        href={"/dashboard"}
                        className="flex w-full items-center justify-between"
                      >
                        Dashboard
                        <DropdownMenuShortcut>
                          <LayoutDashboard />
                        </DropdownMenuShortcut>{" "}
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>
                      <Link
                        href={"/dashboard"}
                        className="flex w-full items-center justify-between"
                      >
                        Dashboard
                        <DropdownMenuShortcut>
                          <LayoutDashboard />
                        </DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  )}
                </>
              ) : (
                <DropdownMenuItem>
                  Orders
                  <DropdownMenuShortcut>
                    <Link href={""}>
                      <CreditCard />
                    </Link>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>
                  <Link href={""}>
                    <Settings />
                  </Link>
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <SignOut />
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <button className="font-medium hover:bg-gray-300 p-2 rounded-lg">
        <Link href={"/sign-in"}>signIn</Link>
      </button>
    );
  }
};

export default GetUser;
