var data = [
{"date":"2003-01-01","San Francisco":7.0,"Houston":8.5,"Seattle":7.4,"Portland":7.3,"Los Angeles":7.8,"San Diego":7.4},
{"date":"2003-04-01","San Francisco":7.0,"Houston":8.4,"Seattle":7.6,"Portland":7.2,"Los Angeles":7.9,"San Diego":7.2},
{"date":"2003-07-01","San Francisco":7.2,"Houston":8.4,"Seattle":7.7,"Portland":7.1,"Los Angeles":7.7,"San Diego":7.3},
{"date":"2003-10-01","San Francisco":7.2,"Houston":8.4,"Seattle":7.2,"Portland":7.0,"Los Angeles":7.9,"San Diego":7.1},
{"date":"2004-01-01","San Francisco":7.0,"Houston":8.4,"Seattle":7.4,"Portland":6.9,"Los Angeles":7.9,"San Diego":7.1},
{"date":"2004-04-01","San Francisco":7.1,"Houston":8.4,"Seattle":7.7,"Portland":7.2,"Los Angeles":8.1,"San Diego":7.4},
{"date":"2004-07-01","San Francisco":7.2,"Houston":8.4,"Seattle":7.7,"Portland":7.3,"Los Angeles":7.9,"San Diego":7.2},
{"date":"2004-10-01","San Francisco":7.2,"Houston":8.3,"Seattle":7.5,"Portland":7.2,"Los Angeles":8.1,"San Diego":7.0},
{"date":"2005-01-01","San Francisco":6.9,"Houston":8.6,"Seattle":7.5,"Portland":7.2,"Los Angeles":7.8,"San Diego":7.5},
{"date":"2005-04-01","San Francisco":7.1,"Houston":8.5,"Seattle":7.7,"Portland":7.1,"Los Angeles":8.0,"San Diego":7.1},
{"date":"2005-07-01","San Francisco":7.3,"Houston":8.6,"Seattle":7.7,"Portland":7.3,"Los Angeles":8.0,"San Diego":7.0},
{"date":"2005-10-01","San Francisco":7.2,"Houston":8.5,"Seattle":7.7,"Portland":7.4,"Los Angeles":7.8,"San Diego":6.4},
{"date":"2006-01-01","San Francisco":7.3,"Houston":8.7,"Seattle":7.5,"Portland":7.2,"Los Angeles":8.0,"San Diego":7.0},
{"date":"2006-04-01","San Francisco":7.2,"Houston":8.7,"Seattle":7.8,"Portland":7.3,"Los Angeles":8.0,"San Diego":6.8},
{"date":"2006-07-01","San Francisco":6.7,"Houston":8.6,"Seattle":7.9,"Portland":7.0,"Los Angeles":7.8,"San Diego":6.3},
{"date":"2006-10-01","San Francisco":6.8,"Houston":8.6,"Seattle":7.4,"Portland":7.0,"Los Angeles":7.8,"San Diego":6.4},
{"date":"2007-01-01","San Francisco":6.8,"Houston":8.7,"Seattle":7.9,"Portland":7.4,"Los Angeles":7.8,"San Diego":6.8},
{"date":"2007-04-01","San Francisco":6.7,"Houston":8.5,"Seattle":7.7,"Portland":6.9,"Los Angeles":7.8,"San Diego":6.4},
{"date":"2007-07-01","San Francisco":6.8,"Houston":8.5,"Seattle":7.7,"Portland":6.8,"Los Angeles":7.7,"San Diego":6.2},
{"date":"2007-10-01","San Francisco":6.5,"Houston":8.5,"Seattle":7.4,"Portland":6.8,"Los Angeles":7.5,"San Diego":6.2},
{"date":"2008-01-01","San Francisco":6.8,"Houston":8.3,"Seattle":7.2,"Portland":6.6,"Los Angeles":7.2,"San Diego":6.0},
{"date":"2008-04-01","San Francisco":6.5,"Houston":8.2,"Seattle":7.4,"Portland":6.5,"Los Angeles":7.5,"San Diego":6.5},
{"date":"2008-07-01","San Francisco":6.1,"Houston":8.2,"Seattle":7.1,"Portland":6.6,"Los Angeles":6.9,"San Diego":5.9},
{"date":"2008-10-01","San Francisco":6.1,"Houston":7.9,"Seattle":6.6,"Portland":5.9,"Los Angeles":6.9,"San Diego":5.2},
{"date":"2009-01-01","San Francisco":5.7,"Houston":7.7,"Seattle":6.5,"Portland":5.6,"Los Angeles":6.5,"San Diego":5.4},
{"date":"2009-04-01","San Francisco":5.6,"Houston":7.6,"Seattle":6.4,"Portland":5.8,"Los Angeles":6.4,"San Diego":5.7},
{"date":"2009-07-01","San Francisco":5.5,"Houston":7.8,"Seattle":6.4,"Portland":5.7,"Los Angeles":6.4,"San Diego":5.4},
{"date":"2009-10-01","San Francisco":5.9,"Houston":7.8,"Seattle":6.4,"Portland":6.0,"Los Angeles":6.2,"San Diego":5.3},
{"date":"2010-01-01","San Francisco":6.0,"Houston":7.8,"Seattle":6.7,"Portland":5.9,"Los Angeles":6.6,"San Diego":5.8},
{"date":"2010-04-01","San Francisco":6.0,"Houston":7.9,"Seattle":6.6,"Portland":5.9,"Los Angeles":6.7,"San Diego":6.0},
{"date":"2010-07-01","San Francisco":5.7,"Houston":7.6,"Seattle":6.8,"Portland":5.8,"Los Angeles":7.0,"San Diego":5.4},
{"date":"2010-10-01","San Francisco":6.0,"Houston":7.5,"Seattle":6.7,"Portland":6.1,"Los Angeles":6.7,"San Diego":5.2},
{"date":"2011-01-01","San Francisco":5.9,"Houston":7.6,"Seattle":6.4,"Portland":5.9,"Los Angeles":6.9,"San Diego":6.2},
{"date":"2011-04-01","San Francisco":6.3,"Houston":7.9,"Seattle":7.1,"Portland":5.9,"Los Angeles":7.4,"San Diego":6.1},
{"date":"2011-07-01","San Francisco":6.2,"Houston":7.9,"Seattle":7.0,"Portland":6.1,"Los Angeles":6.8,"San Diego":6.0},
{"date":"2011-10-01","San Francisco":6.0,"Houston":7.9,"Seattle":6.7,"Portland":6.4,"Los Angeles":7.0,"San Diego":5.9},
{"date":"2012-01-01","San Francisco":6.1,"Houston":8.1,"Seattle":7.0,"Portland":6.2,"Los Angeles":7.3,"San Diego":6.0},
{"date":"2012-04-01","San Francisco":6.3,"Houston":8.0,"Seattle":7.4,"Portland":6.5,"Los Angeles":7.4,"San Diego":6.4},
{"date":"2012-07-01","San Francisco":7.1,"Houston":8.3,"Seattle":7.4,"Portland":6.7,"Los Angeles":7.1,"San Diego":6.4},
{"date":"2012-10-01","San Francisco":6.5,"Houston":8.4,"Seattle":7.2,"Portland":6.5,"Los Angeles":7.3,"San Diego":5.9},
{"date":"2013-01-01","San Francisco":6.7,"Houston":8.3,"Seattle":7.2,"Portland":6.9,"Los Angeles":7.5,"San Diego":6.3},
{"date":"2013-04-01","San Francisco":7.0,"Houston":8.3,"Seattle":7.3,"Portland":6.8,"Los Angeles":7.6,"San Diego":6.6},
{"date":"2013-07-01","San Francisco":6.5,"Houston":8.3,"Seattle":7.4,"Portland":6.8,"Los Angeles":7.6,"San Diego":6.3}];



