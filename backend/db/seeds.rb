puts "🌱 Seeding messages..."


  puts "Creating users"
  user1 = User.create(name: "Muhia", email: "muhia25@gmail.com", age: "20", period: "2hrs")
  user2 = User.create(name: "Ian", email: "Ian45@gmail.com", age: "24", period: "30min")
  user3 = User.create(name: "Wendy", email: "wendy78@gmail.com", age: "18", period: "1hr")
  user4 = User.create(name: "Mercy", email: "mercy67@gmail.com", age: "30", period: "2hr")



  puts "Creating Gym"
  gym1= Gym.create(activity: "Rolling", day: "Monday", time: "0000hrs", average: "80%", user_id:user1.id)
  gym2= Gym.create(activity: "Skipping ropes", day: "Tuesday", time: "0900hrs", average: "70%", user_id:user2.id)
  gym3= Gym.create(activity: "Mental practice", day: "Wednesday", time: "1000hrs", average: "60%", user_id:user3.id)
  gym4= Gym.create(activity: "Upper Body", day: "Thursday", time: "1000hrs", average: "90%", user_id:user4.id)
  

    
