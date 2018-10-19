package com.revature.daos;

import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import com.revature.beans.Topic;
import com.revature.util.HibernateUtil;

public class TopicDaoImpl implements TopicDao {

	@Override
	public Integer insertTopic(Topic t) {
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		Integer id = null;
		
		try {
			tx = session.beginTransaction();
			id = (Integer)session.save(t);
			tx.commit();
		}catch (HibernateException he) {
			he.printStackTrace();
			tx.rollback();
		} finally {
			session.close();
		}
		return id;
	}

	@Override
	public List<Topic> getAllTopics() {
		List<Topic> lt = null;
		Session session = HibernateUtil.getSession();
		
		try {
			lt = session.createQuery("FROM Topic").list();
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return lt;
	}

	@Override
	public Topic selectTopicById(Integer id) {
		Session session = HibernateUtil.getSession();
		Topic t = null;
		
		try {
			t = (Topic)session.get(Topic.class, id);
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return t;
	}

	@Override
	public Topic updateTopicById(Topic t) {
		Topic topic = null;
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		
		try {
			tx = session.beginTransaction();
			topic = (Topic)session.get(Topic.class, t.getId());
			
			topic.setName(t.getName());
			topic.setPrivId(t.getPrivId());
			
			session.save(topic);
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return topic;
	}

	@Override
	public void removeTopic(Integer id) {
		
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		
		try {
			tx = session.beginTransaction();
			session.delete(session.get(Topic.class, id));
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
			tx.rollback();
		} finally {
			session.close();
		}
	}
}
