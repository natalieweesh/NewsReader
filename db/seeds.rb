# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

f1 = Feed.create(title: "Hacker News 20", url: "http://feeds.feedburner.com/newsyc20")
f1.reload

f2 = Feed.create(title: "Google New", url: "http://news.google.com/?output=rss");
f2.reload
