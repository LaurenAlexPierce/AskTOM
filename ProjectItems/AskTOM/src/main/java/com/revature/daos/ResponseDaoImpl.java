package com.revature.daos;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.Response;
import com.revature.util.HibernateUtil;

public class ResponseDaoImpl implements ResponseDao {

	@Override
	public Integer insertResponse(Response r) {
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		Integer id = null;

		try {
			tx = session.beginTransaction();
			id = (Integer) session.save(r);
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
			tx.rollback();
		} finally {
			session.close();
		}
		return id;
	}

	@Override
	public List<Response> getAllResponseByTopic(Integer id) {
		List<Response> lr = null;
		Session session = HibernateUtil.getSession();

		try {
			lr = session.createQuery("FROM Response R WHERE R.topicId =" + id).list();
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return lr;
	}

	@Override
	public List<Response> getAllResponse() {
		List<Response> lr = null;
		Session session = HibernateUtil.getSession();

		try {
			lr = session.createQuery("FROM Response").list();
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return lr;
	}

	@Override
	public Response selectResponseById(Integer id) {
		Session session = HibernateUtil.getSession();
		Response r = null;

		try {
			r = (Response) session.get(Response.class, id);
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return r;
	}

	@Override
	public Response updateResponseById(Response r) {
		Response response = null;
		Session session = HibernateUtil.getSession();
		Transaction tx = null;

		try {
			tx = session.beginTransaction();
			response = (Response) session.get(Response.class, r.getId());

			response.setContent(r.getContent());
			response.setVotes(r.getVotes());
			response.setTopicId(r.getTopicId());
			response.setUserId(r.getUserId());

			session.save(response);
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return response;
	}

	@Override
	public void removeResponse(Integer id) {
		Session session = HibernateUtil.getSession();
		Transaction tx = null;

		try {
			tx = session.beginTransaction();
			session.delete(session.get(Response.class, id));
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
			tx.rollback();
		} finally {
			session.close();
		}
	}

}
