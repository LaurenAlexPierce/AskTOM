package com.revature.daos;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.Tom;
import com.revature.util.HibernateUtil;

public class TomDaoImpl implements TomDao {

	//pass through a tom object to insert in database
	@Override
	public Integer insertTom(Tom t) {
		
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		Integer id = null;
		
		try {
			tx = session.beginTransaction();
			id = (Integer)session.save(t);
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
			tx.rollback();
		} finally {
			session.close();
		}
		return id;
	}

	//returns a list of all the toms
	@Override
	public List<Tom> getAllToms() {
		List<Tom> tl = null;
		Session session = HibernateUtil.getSession();
		
		try {
			tl = session.createQuery("FROM Tom").list();
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return tl;
	}

	//selects a specific tom by id; returns the tom object
	@Override
	public Tom selectTomById(Integer id) {
		Session session = HibernateUtil.getSession();
		Tom t = null;
		
		try {
			t = (Tom)session.get(Tom.class, id);
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return t;
	}

	//update fields:password,user-name, privilege-id
	@Override
	public Tom updateTomById(Tom t) {
		Tom tom = null;
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		
		try {
			tx = session.beginTransaction();
			tom = (Tom)session.get(Tom.class, t.getId());
			
			tom.setPassword(t.getPassword());
			tom.setUsername(t.getUsername());
			tom.setPrivId(t.getPrivId());
			
			session.save(tom);
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return tom;
	}

	//remove tom object by id
	@Override
	public void removeTom(Integer id) {
		
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		
		try {
			tx = session.beginTransaction();
			session.delete(session.get(Tom.class, id));
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
			tx.rollback();
		} finally {
			session.close();
		}

	}

}
