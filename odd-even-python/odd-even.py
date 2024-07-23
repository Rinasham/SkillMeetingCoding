numbers = [0,1,2,3,4,5,6,7,8,9,10]
for el in numbers:
	if el == 0:
		print(f'{el}は偶数ですが自然数ではありません')
	elif el % 2 == 0:
		print(str(el) + 'は偶数です')
	else:
		print(f'{el}は奇数です')

# intとstrの連結はどれでも可
