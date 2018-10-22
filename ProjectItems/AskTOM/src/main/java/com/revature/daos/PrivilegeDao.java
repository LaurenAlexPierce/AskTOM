package com.revature.daos;

import java.util.List;

import com.revature.beans.Privilege;

public interface PrivilegeDao {
	public Integer insertPrivilege(Privilege p);
	public List<Privilege> getAllPrivileges();
	public Privilege selectPrivilegeById(Integer id);
	public Privilege updatePrivilegeById(Privilege p);
	public void removePrivilege(Integer id);
}
