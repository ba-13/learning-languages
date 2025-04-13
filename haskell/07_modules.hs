-- importing puts all library functions available in global namespace
-- to import in ghci, :m + Data.List Data.Set
-- imports must be done before defining any functions
import Data.List (inits, nub, sort, tails)
-- we can hide offending functions we don't want to import

-- can import without putting on global namespace
import Data.Map qualified as M
-- this is imported by default
import Prelude hiding (length)

-- Modules in standard library: https://downloads.haskell.org/~ghc/latest/docs/html/libraries/
-- This has source code of all those modules

-- https://hoogle.haskell.org/ to search for functions

length :: (Integral b) => [a] -> b
length = foldl (\acc x -> acc + 1) 0

numUniques :: (Eq a) => [a] -> Int
numUniques = length . nub

intersperse :: a -> [a] -> [a]
intersperse b = tail . foldr (\x acc -> b : x : acc) []

intercalate :: [a] -> [[a]] -> [a]
intercalate mid = tail . foldr (\x acc -> mid ++ x ++ acc) []

-- stack over flow due to lazy folds due to creation of thunks
-- try stricter versions foldl' and foldl1'

transpose' :: [[a]] -> [[a]]
transpose' ([] : xss) = transpose' xss
transpose' ((x : xs) : xss) = (x : hds) : transpose' (xs : tls)
  where
    (hds, tls) = unzip [(hd, tl) | hd : tl <- xss]

concat' :: [[a]] -> [a]
concat' = foldr (++) []

-- any equivalent to or . map
-- all equivalent to and . map

iterate' :: (a -> a) -> a -> [a]
iterate' f x = x : iterate' f (f x)

splitAt' :: (Integral b) => b -> [a] -> ([a], [a])
splitAt' _ [] = ([], [])
splitAt' idx all@(x : xs)
  | idx < 1 = ([], all)
  | idx == 1 = ([x], xs)
  | otherwise = let (y, z) = splitAt' (idx - 1) xs in (x : y, z)

takeWhile' :: (a -> Bool) -> [a] -> [a]
takeWhile' _ [] = []
takeWhile' f (x : xs)
  | f x = x : takeWhile' f xs
  | otherwise = []

dropWhile' :: (a -> Bool) -> [a] -> [a]
dropWhile' _ [] = []
dropWhile' f all@(x : xs)
  | not (f x) = dropWhile' f xs
  | otherwise = all

span' :: (a -> Bool) -> [a] -> ([a], [a])
span' f x = (takeWhile' f x, dropWhile' f x)

break' :: (a -> Bool) -> [a] -> ([a], [a])
break' _ [] = ([], [])
break' f (x : xs)
  | f x = ([x], xs)
  | otherwise = let (y, z) = break' f xs in (x : y, z)

group' :: (Eq a) => [a] -> [[a]]
group' [] = []
group' (x : xs) = (x : equalToX) : group' rest
  where
    (equalToX, rest) = span (== x) xs

-- inits and tails exist
splits = let w = "w00t" in zip (inits w) (tails w)

-- isInfixOf and isPrefixOf

-- notElem and elem

partition' :: (a -> Bool) -> [a] -> ([a], [a])
partition' _ [] = ([], [])
partition' f (x : xs)
  | f x = (x : y, z)
  | otherwise = (y, x : z)
  where
    (y, z) = partition' f xs

find' :: (a -> Bool) -> [a] -> Maybe a
find' _ [] = Nothing
find' f (x : xs)
  | f x = Just x
  | otherwise = find' f xs

elemIndex' :: (Eq a) => a -> [a] -> Maybe Int
elemIndex' _ [] = Nothing
elemIndex' val (x : xs)
  | val == x = Just 0
  | otherwise = case elemIndex' val xs of
      Nothing -> Nothing
      Just index -> Just (1 + index)

elemIndices' :: (Eq a, Integral b) => a -> [a] -> [b]
elemIndices' _ [] = []
elemIndices' val (x : xs)
  | val == x = 0 : restOfIndices
  | otherwise = restOfIndices
  where
    restOfIndices = map (+ 1) $ elemIndices' val xs

-- we have seen zip and zipWith
-- there are zip3, zip4 ... zip7

lines_ = lines "first line\nsecond line\nthird line"

getOriginal = unlines lines_

words_ = words "hey these are the words in this sentence"

getOriginal' = unwords words_
