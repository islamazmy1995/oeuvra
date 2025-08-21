'use client'
import { usePathname } from "next/navigation"
import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, Menu, ChevronDown, User, X } from 'lucide-react'
import Image from 'next/image'
import { shopItems, customizeItems, mainNav } from '@/data/navbar'

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const renderNavItem = (item: { name: string; href: string }) => (
    <div key={item.href} className="relative group">
      <Link
        href={item.href}
        className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${pathname === item.href
            ? "text-orange-600 font-bold"
            : "text-orange-800 hover:text-orange-600"
          }`}
      >
        {item.name}
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
            }`}
        ></span>
      </Link>
    </div>
  )

  const renderDropdown = (
    items: any[],
    isOpen: boolean,
    onClose: () => void,
    className = ""
  ) => (
    <div
      className={`absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 transition-all duration-300 transform ${isOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-2 invisible'
        } ${className}`}
      onMouseLeave={onClose}
    >
      <div className="absolute -top-1 right-8 w-2 h-2 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
      <div className="max-h-80 overflow-y-auto">
        {items.map((item) => (
          <div key={item.href} className="group/item relative">
            {item.children ? (
              <div>
                <span 
                  className="flex items-center justify-between px-4 py-3 cursor-pointer text-gray-800 hover:text-orange-600"
                  onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      openSubmenu === item.href ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>
                
                {openSubmenu === item.href && (
                  <div className="pl-4 overflow-hidden transition-all duration-300 max-h-96">
                    {item.children.map((child: any) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-600"
                        onClick={() => {
                          onClose()
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {child.image && (
                          <div className="w-6 h-6 mr-2 flex-shrink-0 rounded-full overflow-hidden border border-gray-100">
                            <Image
                              src={child.image}
                              alt={child.name}
                              width={24}
                              height={24}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-orange-600"
                onClick={() => {
                  onClose()
                  setIsMobileMenuOpen(false)
                }}
              >
                {item.image && (
                  <div className="w-6 h-6 mr-2 flex-shrink-0 rounded-full overflow-hidden border border-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <header className="bg-gradient-to-r from-orange-50 to-pink-50 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-orange-800 hover:text-orange-600 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/logo.png"
                  alt="Oeuvra"
                  width={100}
                  height={8}
                  className="h-12 md:h-14 w-auto hover:scale-105 transition-transform duration-200"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {mainNav.map((item) => {
                if (item.name === 'Shop') {
                  return (
                    <div key={item.href} className="relative group">
                      <button
                        onClick={() => setIsShopOpen(!isShopOpen)}
                        className="px-4 py-3 text-sm font-medium flex items-center text-orange-800 hover:text-orange-600 transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {renderDropdown(shopItems, isShopOpen, () => setIsShopOpen(false))}
                    </div>
                  )
                } else if (item.name === 'Customize') {
                  return (
                    <div key={item.href} className="relative group">
                      <button
                        onClick={() => setIsCustomizeOpen(!isCustomizeOpen)}
                        className="px-4 py-3 text-sm font-medium flex items-center text-orange-800 hover:text-orange-600 transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isCustomizeOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {renderDropdown(customizeItems, isCustomizeOpen, () => setIsCustomizeOpen(false))}
                    </div>
                  )
                }
                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`px-4 py-3 text-sm font-medium transition-all duration-300 relative ${pathname === item.href
                          ? "text-orange-600 font-bold"
                          : "text-orange-800 hover:text-orange-600"
                        }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      ></span>
                    </Link>
                  </div>
                )
              })}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-3">
              <button className="text-orange-800 hover:text-orange-600 transition-colors p-2 hover:bg-orange-100 rounded-full">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/cart" className="text-orange-800 hover:text-orange-600 relative transition-colors p-2 hover:bg-orange-100 rounded-full">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  0
                </span>
              </Link>
              <Link href="/login" className="text-orange-800 hover:text-orange-600 transition-colors p-2 hover:bg-orange-100 rounded-full">
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t border-orange-100">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-gray-100 last:border-b-0">
                {item.name === 'Shop' ? (
                  <div>
                    <button
                      onClick={() => setIsShopOpen(!isShopOpen)}
                      className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-orange-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isShopOpen && (
                      <div className="pl-4 bg-gray-50">
                        {shopItems.map((shopItem) => (
                          <Link
                            key={shopItem.href}
                            href={shopItem.href}
                            className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {shopItem.image && (
                              <div className="w-6 h-6 mr-2 flex-shrink-0 rounded-full overflow-hidden border border-gray-100">
                                <Image
                                  src={shopItem.image}
                                  alt={shopItem.name}
                                  width={24}
                                  height={24}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            {shopItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === 'Customize' ? (
                  <div>
                    <button
                      onClick={() => setIsCustomizeOpen(!isCustomizeOpen)}
                      className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-orange-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCustomizeOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isCustomizeOpen && (
                      <div className="pl-4 bg-gray-50">
                        {customizeItems.map((customizeItem) => (
                          <div key={customizeItem.href}>
                            {customizeItem.children ? (
                              <div>
                                <button
                                  onClick={() => setOpenSubmenu(openSubmenu === customizeItem.href ? null : customizeItem.href)}
                                  className="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                >
                                  {customizeItem.name}
                                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openSubmenu === customizeItem.href ? 'rotate-180' : ''}`} />
                                </button>
                                {openSubmenu === customizeItem.href && (
                                  <div className="pl-4 bg-white">
                                    {customizeItem.children.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        className="block px-4 py-2 text-xs text-gray-500 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={customizeItem.href}
                                className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {customizeItem.image && (
                                  <div className="w-6 h-6 mr-2 flex-shrink-0 rounded-full overflow-hidden border border-gray-100">
                                    <Image
                                      src={customizeItem.image}
                                      alt={customizeItem.name}
                                      width={24}
                                      height={24}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )}
                                {customizeItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-3 text-base font-medium transition-colors ${pathname === item.href
                        ? "text-orange-600 bg-orange-50 font-bold"
                        : "text-orange-800 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}