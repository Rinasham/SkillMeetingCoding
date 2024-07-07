remainder = int(input('bottleは何本ありますか？'))

# ------- while文 -------
while(remainder > 1):
  print(f'{remainder} bottles 残っています! 残り{remainder} bottles！')
  print(f' １bottle飲んで次の人に回しましょう！ 残り{remainder} bottles！')
  remainder -= 1

print('1 bottle 残っています! 1 bottle of beer!')
print('1 bottle飲んで、無くなりました！おめでとう！')

# ------- for文 -------

# for i in range(remainder - 1):
#   # 以下どっちでも可
#     # f文字列 ------
#       # print(f'{remainder} bottles 残っています! 残り{remainder} bottles！')
#       # print(f' １bottle飲んで次の人に回しましょう！ 残り{remainder} bottles！')

#     # format() ------
#       # print('{} bottles 残っています! 残り{} bottles！'.format(remainder, remainder))
#       # print(' １bottle飲んで次の人に回しましょう！ 残り{} bottles！'.format(remainder))

#   remainder -= 1

# print('1 bottle 残っています! 1 bottle of beer!')
# print('1 bottle飲んで、無くなりました！おめでとう！')
