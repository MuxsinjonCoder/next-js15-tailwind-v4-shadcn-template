"use client";

import { useState, useCallback, useRef } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function Search({
  searchValue,
  setSearchValue,
  placeholder = "Qidirish...",
  className = "",
}: SearchProps) {
  const [inputValue, setInputValue] = useState(searchValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSetSearchValue = useCallback(
    (val: string) => {
      setSearchValue(val);
    },
    [setSearchValue]
  );

  useDebounce(inputValue, 500, debouncedSetSearchValue);

  const clearSearch = () => {
    setInputValue("");
    setSearchValue("");
    inputRef.current?.blur();
  };

  return (
    <motion.div
      initial={{ width: "fit-content" }}
      animate={{ width: isFocused ? "100%" : "fit-content" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`relative ${className}`}
    >
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="pl-10 pr-10 py-0 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
      />
      <AnimatePresence>
        {inputValue && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={clearSearch}
              size="icon"
              className="absolute bg-transparent hover:bg-transparent right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
