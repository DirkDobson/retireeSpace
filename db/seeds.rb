100.times do
  name = Faker::Name.name
Retiree.create(
  name: name,
  age: Faker::Number.number(2),
  can_walk: Faker::Boolean.boolean,
  sex: Faker::Demographic.sex,
  marital_status: Faker::Demographic.marital_status,
  avatar: Faker::Avatar.image(name, '100x400', 'png', 'set2')
)
end