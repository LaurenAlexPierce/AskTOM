package com.revature.daos;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.Privilege;
import com.revature.util.HibernateUtil;

public class PrivilegeDaoImpl implements PrivilegeDao {

	//pass through a privilege object to insert in database
	@Override
	public Integer insertPrivilege(Privilege p) {
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		Integer id = null;
		
		try {
			tx = session.beginTransaction();
			id = (Integer)session.save(p);
			tx.commit();
		}catch (HibernateException he) {
			he.printStackTrace();
			tx.rollback();
		}finally {
			session.close();
		}
		
		return id;
	}

	//returns a list of all the privileges
	@Override
	public List<Privilege> getAllPrivileges() {
		
		List<Privilege> lp = null;
		Session session = HibernateUtil.getSession();
		
		try {
			lp = session.createQuery("FROM priv").list();
		} catch (HibernateException he)
		{
			he.printStackTrace();
		} finally {
			session.close();
		}
		return lp;
	}

	//selects a specific privilege by id; returns privilege object
	@Override
	public Privilege selectPrivilegeById(Integer id) {
		
		Session session = HibernateUtil.getSession();
		Privilege p = null;
		
		try {
			p = (Privilege)session.get(Privilege.class, id);
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return p;
	}

	//update field by passing in privilege object. (only field to update is name)
	@Override
	public Privilege updatePrivilegeById(Privilege p) {
		Privilege priv = null;
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		
		try {
			tx = session.beginTransaction();
			priv = (Privilege)session.get(Privilege.class, p.getId());
			
			priv.setName(p.getName());
			
			session.save(priv);
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
		} finally {
			session.close();
		}
		return priv;
	}

	//pass in id of privilege to remove
	@Override
	public void removePrivilege(Integer id) {
		
		Session session = HibernateUtil.getSession();
		Transaction tx = null;
		
		try {
			tx = session.beginTransaction();
			session.delete(session.get(Privilege.class, id));
			tx.commit();
		} catch (HibernateException he) {
			he.printStackTrace();
			tx.rollback();
		} finally {
			session.close();
		}
	}
}
