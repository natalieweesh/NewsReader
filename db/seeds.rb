# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(username: "user1", password: "password", password_confirmation: "password")

f1 = Feed.create(title: "Hacker News 20", url:"http://feeds.feedburner.com/newsyc20", user_id: u1.id)
f1.reload

f2 = Feed.create(title: "The New Yorker", url: "http://www.newyorker.com/services/mrss/feeds/everything.xml", user_id: u1.id, favorited: true)
f2.reload

##################

u2 = User.create(username: "user2", password: "password", password_confirmation: "password")

f3 = Feed.create(title: "New York Times", url: "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", user_id: u2.id)
f3.reload

f4 = Feed.create(title: "Venturebeat", url: "http://venturebeat.com/feed/", user_id: u2.id, favorited: true)
f4.reload