package com.revature.daos;

import java.util.List;

import com.revature.beans.Topic;

public interface TopicDao {
	public Integer insertTopic(Topic t);
	public List<Topic> getAllTopics();
	public Topic selectTopicById(Integer id);
	public Topic updateTopicById(Topic t);
	public void removeTopic(Integer id);
}
