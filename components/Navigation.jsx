/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

const solutions = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "BLOGS",
    href: "/blogs",
  },
  {
    name: "VIDEOS",
    href: "/videos",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "SIGN UP",
    href: "/register",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <Popover className="md:max-w-7xl w-full mx-auto mt-4 flex items-center justify-between">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <h1 className="text-4xl font-black font-header ">DevNotes</h1>
            <p className="leading-none ml-2 text-sm font-title font-bold">
              The Blog
              <br />
              For Developers
            </p>
          </div>
        </Link>

        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Link href="/">
            <a className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline underline-offset-4">
              HOME
            </a>
          </Link>

          <Link href="/blogs">
            <a className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline underline-offset-4">
              BLOGS
            </a>
          </Link>

          <Link href="/videos">
            <a className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline underline-offset-4">
              VIDEOS
            </a>
          </Link>
          <Link href="/about">
            <a className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline underline-offset-4">
              ABOUT
            </a>
          </Link>
          <Link href="/register">
            <a className="text-base font-links font-bold border-solid border-2 border-black px-2 py-1 mr-2 rounded-lg hover:bg-black hover:text-white">
              SIGN UP
            </a>
          </Link>
        </Popover.Group>
        <div className="mr-2 my-2 md:hidden">
          <Popover.Button>
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6 ml-auto" aria-hidden="true" />
          </Popover.Button>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <h1 className="text-4xl font-black font-title ">
                        DevNotes
                      </h1>
                      <p className="leading-none ml-2 text-sm font-title font-bold">
                        The Blog
                        <br />
                        For Developers
                      </p>
                    </div>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link key={item.name} href="/">
                        <a className="text-base font-title font-bold mr-4 hover:text-blue-500">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <hr className="mt-2 w-full md:max-w-7xl mx-auto border-solid border-black" />
    </>
  );
}
